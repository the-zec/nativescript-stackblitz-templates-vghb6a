import { Observable } from '@nativescript/core';

function getMessage(counter) {
  if (counter <= 0) {
    return 'Şuanda iş bulunmamaktadır.';
  } else {
    return `${counter} taps left`;
  }
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.counter = 1;
  viewModel.message = getMessage(viewModel.counter);

  viewModel.onTap = () => {
    viewModel.counter--;
    viewModel.set('message', getMessage(viewModel.counter));

    // log the message to the console
    console.log(getMessage(viewModel.counter));
  };

  return viewModel;
}

function getMessage2(counter) {
  if (counter <= 0) {
    return 'İŞ ilanı verildi.';
  } else {
    return `${counter} taps left`;
  }
}

export function createViewModel2() {
  const viewModel2 = new Observable();
  viewModel2.counter = 1;
  viewModel2.message = getMessage2(viewModel2.counter);

  viewModel2.onTap = () => {
    viewModel2.counter--;
    viewModel2.set('message2', getMessage2(viewModel2.counter));

    // log the message to the console
    console.log(getMessage2(viewModel2.counter));
  };

  return viewModel2;
}
