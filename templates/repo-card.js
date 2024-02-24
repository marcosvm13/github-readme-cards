const svgrepoCard = `
<svg width="500px" height="150" x="0" y="0" id="github-repo-card" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="descId">
        <style>
        * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        }
        body {
        background: #323c41;
        }
        .blog-card {
        width: 200px;
        height: 300px;
        position: absolute;
        top: 625px;
        left: 250px;
        margin: -250px 0 0 -175px;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 3px /3px 20px rgba(0, 0, 0, 0.5);
        text-align: center;
        }
        .blog-card.spring-fever {
        background: url(./relojes-blandos.jpg) no-repeat;
        background-size: 220%;
        }
        .blog-card .color-overlay {
        /* Rectangle 11: */
        background: rgba(84, 104, 110, 0.4);
        width: 350px;
        height: 500px;
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        transition: background 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
        }
        .blog-card .gradient-overlay {
        /* bg-gradient: */
        background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 21%);
        background-image: -moz-linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 21%);
        background-image: -o-linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 21%);
        background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 21%);
        width: 350px;
        height: 500px;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 15;
        }
        .blog-card:hover .card-info {
        opacity: 1;
        bottom: 120px;
        }
        .blog-card:hover .color-overlay {
        background: rgba(84, 104, 110, 0.8);
        }
        .title-content {
        text-align: center;
        margin: 5px 0 0 0;
        position: absolute;
        z-index: 20;
        width: 100%;
        top: 0;
        left: 0;
        }
        h3 {
        font-size: 20px;
        font-weight: 1000;
        letter-spacing: 2px;
        color: #000000;
        margin-bottom: 0;
        }
        hr {
        width: 50px;
        height: 3px;
        margin: 20px auto;
        border: 0;
        background: #D0BB57;
        }
        .card-info {
        width: 100%;
        position: absolute;
        bottom: 100px;
        left: 0;
        margin: 0 auto;
        padding: 0 50px;
        color: #DCE3E7;
        font-family: "Droid Serif", serif;
        font-style: 16px;
        line-height: 24px;
        z-index: 20;
        opacity: 0;
        transition: bottom 0.3s, opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
        }
        .utility-info {
        position: absolute;
        bottom: 0px;
        left: 0;
        z-index: 20;
        }
        .utility-list {
        list-style-type: none;
        margin: 0 0 30px 20px;
        padding: 0;
        width: 100%;
        }
        .utility-list li {
        margin: 0 15px 0 0;
        padding: 0 0 0 22px;
        display: inline-block;
        color: #DCE3E7;
        }
        .utility-list li.date {
        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/icon-calendar.svg) no-repeat 0 0.1em;
        }
</style>
           
   <a href="https://www.habla.dev/blog/2023/09/15/all-roads-lead-to-kdb-the-technical-counterpart">
            <div class="blog-card spring-fever">
            <div class="title-content">
                <h3>All Roads </br>
                Lead to Kdb</h3>
                <hr />
            </div><!-- /.title-content -->
            <div class="card-info">
                The Technical Counterpart
            </div><!-- /.card-info -->
            <div class="utility-info">
                <ul class="utility-list">
                <li class="date">15-09-2023</li>
                </ul>
            </div><!-- /.utility-info -->
            <!-- overlays -->
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
            </div><!-- /.blog-card -->
            </a>
</svg>

`

module.exports = svgrepoCard;
