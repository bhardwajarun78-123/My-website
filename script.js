function updateTotal() {
    let total = 0;

    let webDesign = document.getElementById('webDesign');
    let aiPrompts = document.getElementById('aiPrompts');
    let jsFeatures = document.getElementById('jsFeatures');

    if (webDesign && webDesign.checked) {
        total += parseInt(webDesign.value);
    }
    if (aiPrompts && aiPrompts.checked) {
        total += parseInt(aiPrompts.value);
    }
    if (jsFeatures && jsFeatures.checked) {
        total += parseInt(jsFeatures.value);
    }

    document.getElementById('totalPrice').innerText = '$' + total;
}
function resetCalculator() {
    let webDesign = document.getElementById('webDesign');
    let aiPrompts = document.getElementById('aiPrompts');
    let jsFeatures = document.getElementById('jsFeatures');

    if (webDesign) webDesign.checked = false;
    if (aiPrompts) aiPrompts.checked = false;
    if (jsFeatures) jsFeatures.checked = false;

    document.getElementById('totalPrice').innerText = '$0';
}
// Checkbox Total Price Calculation
document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const totalPriceElement = document.getElementById('totalPrice');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      let total = 0;
      checkboxes.forEach(function(cb) {
        if (cb.checked) {
          // Extract price number from checkbox value or default logic
          total += parseInt(cb.value || 0);
        }
      });
      if (totalPriceElement) {
        totalPriceElement.textContent = total;
      }
    });
  });
});