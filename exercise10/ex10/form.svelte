<script>
  </script>
  
  <form>
    <div class="grid_1">
      <label for="card_name">Cardholder Name</label>
      <input type="text" placeholder="e.g. Jane Appleseed" id="card_name" required />
    </div>
    <div class="grid_2">
      <label for="card_number">Card Number</label>
      <input
        type="number"
        oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        minlength="16"
        maxlength="16"
        placeholder="e.g. 1234 5678 9123 0000"
        id="card_number"
        required
      />
    </div>
    <div class="card_information">
      <div id="card_date">
        <label for="card_date">Exp. Date (MM/YY)</label>
        <div class="two_inp">
          <div>
            <input
              type="number"
              placeholder="MM"
              oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              minlength="2"
              maxlength="2"
              id="card_month"
              required
            />
          </div>
          <div>
            <input
              oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              type="number"
              minlength="2"
              maxlength="2"
              placeholder="YY"
              id="card_year"
              required
            />
          </div>
        </div>
      </div>
      <div class="grid_4">
        <label for="card_cvc">CVC</label>
        <input type="number" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="3" placeholder="e.g. 123" id="card_cvc" required/>
      </div>
    </div>
    <button id="submit_btn" type="submit">Confirm</button>
  </form>
  
  <div class="thank hidden">
    <div class="thank hidden">
        <img src="./images/icon-complete.svg" alt="Completed" />
        <h1>Thank you!</h1>
        <p>We've added your card details</p>
        <button>Continue</button>
      </div>
          <img src="./images/icon-complete.svg" alt="Completed" />
    <h1>Thank you!</h1>
    <p>We've added your card details</p>
    <button>Continue</button>
  </div>
  <style>
  </style>
  