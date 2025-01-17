<html !doctype>
    <head>
        <title>Digital Clock</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

        <style>
            body {
                display: flex;
                flex-direction: column;
                height: 100vh;
                margin: auto;
                justify-content: center;
                align-items: center;
                height: 100vh;
                font-family: sans-serif;
            }
            #digital-clock {
                font-size: 50px;
            }
        </style>
    </head>
    <body>
        <h1>Digital Clock</h1>

        <div id="digital-clock"></div>
    </body>

    <script>
        $(document).ready(function () {
            function updateClock() {
                const now = new Date();
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');
                $('#digital-clock').text(`${hours}:${minutes}:${seconds}`);
            }

            setInterval(updateClock, 1000);
            updateClock();
        });
    </script>
</html>