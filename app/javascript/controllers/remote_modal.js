// app/javascript/controllers/remote_modal_controller.js
 
import { Controller } from "@hotwired/stimulus";
 
// Connects to data-controller="remote-modal"
export default class extends Controller {
  connect() {
    this.element.showModal();
  }
}