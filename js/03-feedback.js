const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

let formData = {};

const fillFormFields = feedbackForm => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  const formDataFromLSKeys = Object.keys(formDataFromLS);

  for (const key of formDataFromLSKeys) {
    feedbackForm.elements[key].value = formDataFromLS[key];
  }
};

fillFormFields(refs.feedbackForm);

const onFormFieldChange = ({ target: formField }) => {
  const formFieldName = formField.name;
  const formFieldValue = formField.value;

  formData[formFieldName] = formFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  event.target.reset();
};

refs.feedbackForm.addEventListener('change', onFormFieldChange);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
