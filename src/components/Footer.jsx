<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Footer Design</title>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body{
      background:#f5f5f5;
    }

    footer{
      background:#02134d;
      color:white;
      padding:60px 80px 40px;
    }

    .footer-container{
      display:flex;
      flex-direction:column;
      gap:40px;
    }

    .about-section h2{
      font-size:32px;
      margin-bottom:25px;
      font-weight:700;
    }

    .about-section p{
      font-size:24px;
      color:#d8d8d8;
    }

    .footer-line{
      width:100%;
      height:1px;
      background:#8f96b2;
      margin-top:20px;
    }

    .footer-bottom{
      display:flex;
      justify-content:space-between;
      align-items:flex-end;
      flex-wrap:wrap;
      gap:20px;
      margin-top:30px;
    }

    .footer-left p{
      font-size:22px;
      line-height:1.7;
      color:#f2f2f2;
    }

    .footer-right{
      font-size:26px;
      font-weight:600;
    }

    /* Responsive Design */
    @media(max-width:768px){

      footer{
        padding:40px 25px;
      }

      .about-section h2{
        font-size:26px;
      }

      .about-section p{
        font-size:18px;
      }

      .footer-left p{
        font-size:16px;
      }

      .footer-right{
        font-size:20px;
      }

      .footer-bottom{
        flex-direction:column;
        align-items:flex-start;
      }
    }
  </style>
</head>

<body>

  <footer>
    <div class="footer-container">

      <div class="about-section">
        <h2>About</h2>
        <p>first name of group members</p>
      </div>

      <div class="footer-line"></div>

      <div class="footer-bottom">

        <div class="footer-left">
          <p>©2026 Design by Amaka & Ifeoma A.</p>
          <p>Built by GroupName. All rights reserved</p>
        </div>

        <div class="footer-right">
          TSAcademy
        </div>

      </div>

    </div>
  </footer>

  <script>
    console.log("Footer Loaded Successfully");
  </script>

</body>
</html>