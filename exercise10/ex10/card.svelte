<script>
  </script>
  
  <div class="cards">
    <div class="front_card">
      <img src="./images/card-logo.svg" alt="card-logo" class="card_logo" />
      <div class="card_container">
        <img src="./images/card-front.svg" alt="front-card" />
        <h1 id="number">0000 0000 0000 0000</h1>
        <div class="card_info">
          <span id="name">Jane Appleseed</span>
          <span id="date">
            <span id="month">00</span> /
            <span id="year">00</span>
          </span>
        </div>
      </div>
    </div>
    <div class="back_card">
      <img src="./images/card-back.svg" alt="back-card" />
      <span id="cvc">000</span>
    </div>
  </div>
  
  <style>
    .card_information {
      display: flex;
      grid-column: 2 span;
      gap: 1rem;
    }
    #card_date {
      display: flex;
      flex-direction: column;
      grid-column: 1 span;
    }
    #card_date .two_inp {
      display: flex;
    }
    .two_inp div {
      flex-direction: column;
    }
    #card_date div input {
      width: 70px;
      margin-inline: 0.5rem;
      margin-left: 0;
    }
    #card_cvc {
      width: 100%;
    }
    form button {
      grid-column: 2 span;
      font-size: 18px;
      height: 50px;
      color: var(--White);
      border-radius: 6px;
      background: var(--Very-dark-violet);
      cursor: pointer;
    }
    .thank {
      width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
    .thank h1 {
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    .thank p {
      font-size: 18px;
      color: var(--Dark-grayish-violet);
    }
    .thank button {
      color: var(--White);
      width: 100%;
      border-radius: 6px;
      padding: 1rem;
      font-size: 18px;
      background-color: var(--Very-dark-violet);
      cursor: pointer;
    }
    @media screen and (max-width: 1023px) {
      .front_card .card_container img,
      .front_card,
      .back_card img,
      .back_card {
        width: 300px;
      }
      .card_logo {
        width: 50px;
      }
      #number {
        font-size: 1.1rem;
      }
      #cvc {
        top: 42%;
        right: 12%;
      }
    }
  </style>
  