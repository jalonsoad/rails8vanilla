import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="modal"
export default class extends Controller {
  connect() {
    console.log('connected to modal controller');
  }
  closeModal() {
    this.modal.hide();
  }
}
