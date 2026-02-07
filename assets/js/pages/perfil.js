const uploadBtn = document.getElementById("uploadBtn");
const photoInput = document.getElementById("photoInput");
const avatarImg = document.getElementById("profileAvatar");

if (uploadBtn && photoInput) {
  uploadBtn.addEventListener("click", () => {
    photoInput.click();
  });

  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        avatarImg.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });
}
