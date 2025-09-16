document.getElementById("input").addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                fetch("https://api-d1an.onrender.com/api/message", {
                    method: "POST",
                    headers: {
                        "Content-Type":  "text/plain; charset=UTF-8",
                    },
                    body: document.getElementById("input").value
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message == "Rick") {
                        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                    } else {
                        document.getElementById("result").innerText = data.message;
                    }
                })
                .catch(err => {
                    document.getElementById("result").innerText = "錯誤：" + err;
                });
            }
            
        });