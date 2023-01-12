import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const instance = basicLightbox.create(`
<section class="contact">
      <div class="container">
        <button class="contact__btn">&#215;</button>
        <h2 class="contact__title title">What can us do for you?</h2>
        <p class="contact__subtitle">We are ready to work on a project of any complexity, whether it’s commercial or
          residential.</p>
        <form action="#" class="contact__form">
          <input type="text" name="name" class="contact__form-input" placeholder="Your name*" />
          <input type="email" name="email" class="contact__form-input" placeholder="Email*" />
          <input type="text" name="reason" class="contact__form-input" placeholder="Reason for Contacting*" />
          <input type="text" name="phone" class="contact__form-input" placeholder="Phone" />
          <textarea name="message" class="contact__form-message" placeholder="Message"></textarea>
          <p class="contact__form-description">* indicates a required field</p>
          <button class="contact__form-btn" type="submit" type="reset">Submit</button>
        </form>
      </div>
</section>
`);

export function modalBtnHandler(e) {
  instance.show(() => {
    document.body.classList.add('overflow-hidden');
    const closeModalBtn = document.querySelector('.contact__btn');
    closeModalBtn.addEventListener('click', e => {
      instance.close(() => {
        document.body.classList.remove('overflow-hidden');
      });
    });
  });
  const modal = document.querySelector('.basicLightbox');
  modal.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove('overflow-hidden');
    }
  });
}
