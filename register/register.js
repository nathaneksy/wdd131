let participantCount = 1;
const addButton = document.getElementById('add');

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade${count}">
          <option value="" disabled selected></option>
          <option value="1">1st</option>
          <!-- Other grade options here -->
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

addButton.addEventListener('click', () => {
  participantCount++;
  const newParticipant = participantTemplate(participantCount);
  addButton.insertAdjacentHTML('beforebegin', newParticipant);
});

const form = document.querySelector('form');

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  const total = feeElements.reduce((sum, input) => sum + (parseFloat(input.value) || 0), 0);
  return total;
}

function successTemplate(info) {
  return `
    <p>Thank you, ${info.adultName}, for registering.</p>
    <p>You have registered ${info.participantCount} participants and owe $${info.totalFee.toFixed(2)} in fees.</p>
  `;
}

function submitForm(event) {
  event.preventDefault();
  const totalFee = totalFees();
  const adultName = document.getElementById('adult_name').value;
  form.style.display = 'none';
  const summary = document.getElementById('summary');
  summary.style.display = 'block';
  summary.innerHTML = successTemplate({ adultName, participantCount, totalFee });
}

form.addEventListener('submit', submitForm);
