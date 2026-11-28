var dia = document.querySelectorAll("dialog");
if (dia.length) {
    dia.forEach(d => d.innerHTML = "");
}

var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = "dialog::backdrop {background: #181a20} ::selection {background: #2197D5;color:white}";

var loader = document.createElement("dialog");
document.body.appendChild(loader);
loader.innerHTML = `<div>PLEASE WAIT...</div>`;
loader.style = "border:none;outline:none;margin:auto;padding:1rem;background:#fff;";

function showLoader() {
    loader.showModal();
    setTimeout(() => hideLoader(), 8000);
}
var hideLoader = () => loader.close();
showLoader();

const crypto = localStorage.getItem("ahmad_script_uid");
var input = document.querySelector("input");

if (input && document.querySelector(".battery2")) {
    document.querySelector(".battery2").style.width = `${Number(input.value) * 25 / 100}px`;
    input.onchange = () => {
        document.querySelector(".battery2").style.width = `${Number(input.value) * 25 / 100}px`;
        const max = parseInt(input.max);
        if (parseInt(input.value) > max) {
            input.value = max;
        }
    };
}

function applyTheme(bgMode, customTime) {
    const mode = (bgMode || "w").trim().toLowerCase();
    const bgImgEl = document.querySelector(".bg_img") || document.querySelector("#box > img");
    const bat1 = document.querySelector(".battery1");
    const bat2 = document.querySelector(".battery2");
    const mobTimeEl = document.querySelector(".mob_time");
    const hide3El = document.querySelector(".hide3");

    if (customTime && mobTimeEl) {
        mobTimeEl.innerHTML = customTime.replace(/\s|PM|AM/gi, "");
    }

    if (mode === "b") {
            if (bgImgEl) bgImgEl.setAttribute("src", "https://i.ibb.co/hJRvTpJc/62e6ad8e46e8.png");
        document.documentElement.style.setProperty("--bg_color", "#090B0F");
        document.documentElement.style.setProperty("--chat_name", "#ffffff");
        document.documentElement.style.setProperty("--personal_bg", "#000000");

        if (bat1) bat1.style.background = "#48484a";
        if (bat2) bat2.style.background = "#ffffff";

        if (mobTimeEl) {
            mobTimeEl.style.color = "#ffffff";
            mobTimeEl.style.background = "#000000";
            mobTimeEl.style.backgroundImage = "none";
        }
        if (hide3El) {
            hide3El.style.background = "#000000";
        }
        document.querySelectorAll(".hide1, .hide2").forEach(el => {
            el.style.background = "#0D1014";
        });
    } else {
        if (bgImgEl) bgImgEl.setAttribute("src", "https://magic-scripts-ifeed.vercel.app/w.jpeg");
        document.documentElement.style.setProperty("--bg_color", "white");
        document.documentElement.style.setProperty("--chat_name", "rgb(55, 55, 55)");
        document.documentElement.style.setProperty("--personal_bg", "white");

        if (bat1) bat1.style.background = "#a8a9ab";
        if (bat2) bat2.style.background = "#000000";

        if (mobTimeEl) {
            mobTimeEl.style.color = "#000000";
            mobTimeEl.style.backgroundImage = "linear-gradient(to right, #e8e7e5, #ededeb)";
        }
        if (hide3El) {
            hide3El.style.background = "#ffffff";
        }
        document.querySelectorAll(".hide1").forEach(el => {
            el.style.background = "#f1f1f1";
        });
        document.querySelectorAll(".hide2").forEach(el => {
            el.style.background = "#f1f1f1";
        });
    }
}

function startFeedbackGenerator(timeVal, bgVal) {
    var time = new Date().toLocaleTimeString("en", { timeStyle: 'short' });
    var mobTimeEl = document.querySelector(".mob_time");
    if (mobTimeEl) {
        mobTimeEl.innerHTML = (timeVal || time).replace(/\s|PM|AM/gi, "");
    }

    applyTheme(bgVal, timeVal);

    document.body.contentEditable = true;
    var btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("click", () => {
            document.body.contentEditable = false;
            html2canvas(document.querySelector("#box")).then(canvas => {
                let a = document.createElement("a");
                a.download = `SS-${Date.now()}.png`;
                a.href = canvas.toDataURL("image/png");
                a.click();
            });
        });
    }

    fetch("https://magic-scripts-ifeed.vercel.app/names.txt")
        .then((res) => res.text())
        .then((text) => {
            var chat_name_t = [137, 206, 277, 346, 416, 486, 555, 624];
            var array = text.split(/\n/).filter(Boolean);
            var names = [];
            [...Array(9).keys()].forEach(_ => {
                var n = array[Math.floor(Math.random() * array.length)];
                names.push(n);
            });

            for (let i = 0; i < chat_name_t.length; i++) {
                let el = document.createElement('li');
                el.setAttribute("class", "chat_name");
                el.style.left = 73 + "px";
                el.style.top = chat_name_t[i] + "px";
                el.innerHTML = names[i];
                document.querySelector(".ul_chat_name").appendChild(el);
            }

            var arr = [];
            while (arr.length < 6) {
                var r = Math.floor(Math.random() * 8);
                if (arr.indexOf(r) === -1) arr.push(r);
            }
            var arr2 = [...Array(8).keys()].filter(x => !arr.includes(x));
            var chat_dp_t = [136, 207, 277, 346, 416, 486, 555, 625];

            for (let i = 0; i < arr2.length; i++) {
                let el = document.createElement('li');
                el.setAttribute('class', 'chat_dp');
                el.style.top = chat_dp_t[arr2[i]] + "px";
                el.style.left = 9 + "px";
                let el2 = document.createElement('span');
                el2.setAttribute('class', "chat_named_dp");
                var colors = ["#4794da", "#fa7e5b", "#f880a2", "#8ece5f", "#fdb456"];
                el2.style.background = colors[Math.floor(Math.random() * 5)];
                el2.innerText = names[arr2[i]] ? names[arr2[i]][0] : "U";
                el.appendChild(el2);
                document.querySelector(".ul_chat_dp").appendChild(el);
            }

            for (let i = 0; i < arr.length; i++) {
                let el = document.createElement('li');
                el.setAttribute('class', 'chat_dp');
                el.style.top = chat_dp_t[arr[i]] + "px";
                el.style.left = 9 + "px";
                let el2 = document.createElement('img');
                el2.setAttribute('src', `https://magic-scripts-ifeed.vercel.app/img${Math.floor(Math.random() * 50) + 1}.jpg`);
                el.appendChild(el2);
                document.querySelector(".ul_chat_dp").appendChild(el);
            }
        });

    var chat_time_t = [140, 208, 279, 350, 420, 490, 559, 629];
    for (let i = 0; i < chat_time_t.length; i++) {
        let el = document.createElement('li');
        el.setAttribute("class", "chat_time");
        el.style.top = chat_time_t[i] + "px";
        el.innerText = time;
        document.querySelector(".ul_chat_time").appendChild(el);
    }

    var online_bullet_t = [180, 251, 321, 390, 459, 529, 599, 669];
    var arr = [];
    while (arr.length < 4) {
        var r = Math.floor(Math.random() * 8);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    for (let i = 0; i < arr.length; i++) {
        let el = document.createElement('li');
        el.setAttribute("class", "online_bullet");
        el.style.top = online_bullet_t[arr[i]] + "px";
        el.style.left = 48 + "px";
        document.querySelector(".ul_online_bullet").appendChild(el);
    }

    var count_bullet_t = [168, 238, 308, 377, 447, 517, 586, 656];
    for (let i = 0; i < count_bullet_t.length; i++) {
        let el = document.createElement('li');
        el.setAttribute("class", "count_bullet");
        el.style.top = count_bullet_t[i] + "px";
        el.style.left = 334 + "px";
        el.innerText = Math.floor(Math.random() * 3) + 1;
        document.querySelector(".ul_count_bullet").appendChild(el);
    }

    // MESSAGE AREA
    var arr2 = [];
    while (arr2.length < 3) {
        var r = Math.floor(Math.random() * 8);
        if (arr2.indexOf(r) === -1) arr2.push(r);
    }
    var msg_img_t = [158, 227, 298, 366, 436, 509, 576, 646];

    for (let i = 0; i < arr2.length; i++) {
        let el = document.createElement('li');
        el.setAttribute("class", "msg_img");
        el.style.top = msg_img_t[arr2[i]] + "px";
        var el2 = document.createElement('img');
        el2.setAttribute('src', `https://magic-scripts-ifeed.vercel.app/${Math.floor(Math.random() * 35) + 1}.jpg`);
        el.appendChild(el2);
        var el3 = document.createElement("span");
        el3.setAttribute("class", "msg_span_img");
        el3.innerHTML = "Photo";
        el.appendChild(el3);
        document.querySelector(".ul_msg_img").appendChild(el);
    }

    var arr3 = [...Array(8).keys()].filter(x => !arr2.includes(x));
    var a1 = arr3.slice(0, 3);
    var a2 = arr3.slice(3, 4);
    var a3 = arr3[4];

    fetch("https://magic-scripts-ifeed.vercel.app/msgs.txt")
        .then((res) => res.text())
        .then((text) => {
            var array = text.split(/\n/).filter(Boolean);
            for (let i = 0; i < a1.length; i++) {
                let el = document.createElement('li');
                el.setAttribute("class", "msg_img");
                el.style.top = msg_img_t[a1[i]] + "px";
                var el2 = document.createElement("span");
                el2.setAttribute("class", "msg_span_text_alone");
                el2.innerHTML = array[Math.floor(Math.random() * array.length)];
                el.appendChild(el2);
                document.querySelector(".ul_msg_img").appendChild(el);
            }

            for (let i = 0; i < a2.length; i++) {
                let el = document.createElement('li');
                el.setAttribute("class", "msg_img");
                el.style.top = msg_img_t[a2[i]] + "px";
                var el2 = document.createElement('img');
                el2.setAttribute("src", `https://magic-scripts-ifeed.vercel.app/${Math.floor(Math.random() * 21) + 1}.jpg`);
                el.appendChild(el2);
                var el3 = document.createElement("span");
                el3.setAttribute("class", "msg_span_text");
                el3.innerHTML = array[Math.floor(Math.random() * array.length)];
                el.appendChild(el3);
                document.querySelector(".ul_msg_img").appendChild(el);
            }
        });

    let el = document.createElement('li');
    el.setAttribute("class", "msg_img");
    el.style.top = msg_img_t[a3] + "px";
    var el3 = document.createElement("span");
    el3.setAttribute("class", "voice");
    el3.innerHTML = "Voice message";
    el.appendChild(el3);
    document.querySelector(".ul_msg_img").appendChild(el);
}

if (crypto) {
    fetch(`https://ms-ifeed-api.vercel.app/f?id=${crypto}`)
        .then(res => res.text())
        .then(data => {
            hideLoader();
            const cleanData = data.trim();
            if (cleanData[0] == "F") {
                document.querySelector("#box").style.display = "block";

                const payloadContent = cleanData.slice(1);
                const parts = payloadContent.split('|');
                const userEmail = parts[0] ? parts[0].trim().toLowerCase() : "";
                const userLogoUrl = parts[1] ? parts[1].trim() : "";

                if (userLogoUrl) {
                    document.querySelector(".logo").setAttribute("src", userLogoUrl);
                } else {
                    document.querySelector(".logo").setAttribute("src", "https://magic-scripts.vercel.app/logo.png");
                }

                var t = new Date().toLocaleTimeString("en", { timeStyle: 'short' });
                var html = `
                    <div style="width:320px;border-radius:15px;overflow:hidden;background:#fff;box-shadow:0 10px 25px rgba(0,0,0,.45);">
                        <div style="background:#fff;box-sizing:border-box;width:100%;padding:40px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
                            <img src="https://magic-scripts-ifeed.vercel.app/tg.webp" style="width:70px;height:70px;display:block;margin:0 auto 15px;">
                            <div style="color:#222;font-size:24px;font-weight:700;margin-bottom:8px;">FEEDBACKS</div>
                            <div style="color:#666;font-size:13px;margin-bottom:20px;">Configure the settings below.</div>
                            <div style="text-align:left;margin-bottom:15px;">
                                <label for="time" style="position:static;display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;">TIME</label>
                                <input id="time" type="text" value="${t}" placeholder="Enter time" style="position:static;width:100%;box-sizing:border-box;padding:12px;border:1px solid #dbe3ea;border-radius:10px;outline:none;font-size:14px;margin-bottom:15px;">
                                <label for="bw" style="position:static;display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;">BACKGROUND</label>
                                <input id="bw" type="text" value="W" placeholder="W / B" style="position:static;width:100%;box-sizing:border-box;padding:12px;border:1px solid #dbe3ea;border-radius:10px;outline:none;font-size:14px;">
                            </div>
                            <button style="width:100%;background:#0088cc;color:#fff;border:none;padding:12px;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;">RUN MAGIC 🪄</button>
                            <div style="margin-top:18px;font-size:12px;color:#888;border-top:1px solid #eee;padding-top:15px;">🔵 Developed By @Magic_Scripts 🔵</div>
                        </div>
                    </div>
                `;

                var myDialog = document.createElement("dialog");
                document.body.appendChild(myDialog);
                myDialog.innerHTML = html;
                myDialog.style = "border-radius:17px;outline:none;margin:auto;border:none;padding:0;background:transparent;";
                myDialog.showModal();
                document.querySelector("#bw").blur();
                document.querySelector("#time").blur();

                myDialog.querySelector("button").addEventListener("click", () => {
                    var selectedTime = document.querySelector("#time").value;
                    var selectedBg = document.querySelector("#bw").value;
                    myDialog.close();
                    startFeedbackGenerator(selectedTime, selectedBg);
                });
            } else {
                SETITEM(crypto);
            }
        })
        .catch(err => {
            hideLoader();
            console.error("Fetch Error:", err);
            SETITEM(crypto);
        });
} else {
    let cid = self.crypto.getRandomValues(new BigUint64Array(1))[0];
    localStorage.setItem("ahmad_script_uid", cid);
    SETITEM(cid);
    hideLoader();
}

function SETITEM(cid) {
    var myDialog = document.createElement("dialog");
    document.body.appendChild(myDialog);
    myDialog.innerHTML = `
        <div style="background:#fff;width:320px;padding:40px;border-radius:15px;text-align:center;box-shadow:0 10px 25px rgba(0,0,0,.45);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
            <img src="https://magic-scripts-ifeed.vercel.app/tg.webp" style="width:70px;height:70px;display:block;margin:0 auto 15px;">
            <div style="color:#222;font-size:24px;font-weight:700;margin-bottom:8px;">ACCESS LOCKED</div>
            <div style="color:#666;font-size:13px;margin-bottom:15px;">Your device is not authorized.</div>
            <div style="background:#f8fafc;color:#334155;padding:12px;border-radius:10px;border:1px dashed #0088cc;font-family:monospace;font-size:14px;word-break:break-all;margin-bottom:20px;">${cid}</div>
            <div style="text-align:left;font-size:14px;color:#444;line-height:1.7;border-top:1px solid #eee;padding-top:15px;margin-bottom:18px;">
                <b>Telegram:</b> <span style="color:#0088cc;">@Magic_Scripts</span>
            </div>
            <button onclick="location.reload()" style="width:100%;background:#0088cc;color:#fff;border:none;padding:12px;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;">RETRY 🔄</button>
            <div style="margin-top:18px;padding-top:15px;border-top:1px solid #eee;font-size:12px;color:#888;">🔵 Developed By @Magic_Scripts 🔵</div>
        </div>
    `;
    myDialog.style = "border:none;outline:none;padding:0;margin:auto;background:transparent;border-radius:15px;overflow:hidden;box-shadow:none;";
    myDialog.showModal();
}
