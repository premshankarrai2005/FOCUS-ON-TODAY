const checkBoxList = document.querySelectorAll('.Custom-checkbox')
const inputfield = document.querySelectorAll('.goal-input')
const errorfield = document.querySelector('.error-label')
const ProgressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const progressLabel = document.querySelector('.progress-label')
const allQuotes =[
    'Raise the bar by completing your goals!',
    'Well begun is haif done!',
    'Just a step away, keep going!',
    'whoa! you just completed all the goals, time for chill :D'
]

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
let CompletedGoalsCount =Object.values(allGoals).filter((goals)=>goals.Completed).length
progressValue.style.width =`${CompletedGoalsCount/3 *100}%`
progressLabel.innerHTML =allQuotes[CompletedGoalsCount]
progressValue.firstElementChild.innerHTML=`${CompletedGoalsCount}/3 Completed`

checkBoxList.forEach((checkbox) => {

    checkbox.addEventListener('click', (e) => {
        const allGoalAdded = [...inputfield].every((input) => {
            return input.value

        })
        if (allGoalAdded) {
            checkbox.parentElement.classList.toggle('Completed')
            const inputID =checkbox.nextElementSibling.id
            allGoals[inputID].Completed=!allGoals[inputID].Completed;
            CompletedGoalsCount =Object.values(allGoals).filter((goals)=>goals.Completed).length;
            progressValue.style.width =`${CompletedGoalsCount/3 *100}%`
            progressValue.firstElementChild.innerHTML=`${CompletedGoalsCount}/3 Completed`
            progressLabel.innerHTML =allQuotes[CompletedGoalsCount]
            localStorage.setItem('allGoals', JSON.stringify(allGoals));
        }
        else {
            ProgressBar.classList.add('show-error')
        }

    })

})
inputfield.forEach((input) => {
    if (allGoals[input.id]) {
        input.value = allGoals[input.id].name;
    }
    if(allGoals[input.id] && allGoals[input.id].Completed){
        input.parentElement.classList.add('Completed')
    }
    input.addEventListener('focus', () => {
        ProgressBar.classList.remove('show-error')
    });
    input.addEventListener('input', (e) => {
        if(allGoals[input.id] && allGoals[input.id].Completed){
            e.target.value=allGoals[input.id].name
            return 
        }
        allGoals[input.id] = {
            name: input.value,
            Completed: false,
        };
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    });
})

document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("This function has been disabled to prevent you from stealing my code!");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("This function has been disabled to prevent you from stealing my code!");
      window.event.returnValue = false;
    });
  }