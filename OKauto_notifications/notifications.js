const notifCard = document.querySelector(".notif-card");
function createCard([date, name]) {
    let code = `
    <ion-card>
        <ion-grid>
            <ion-row class = "row">
                <ion-col class="header-col">
                    <ion-card-header>
                        <ion-card-title> Новый штраф</ion-card-title>
                        <ion-card-subtitle>${date}</ion-card-subtitle>
                    </ion-card-header>
                </ion-col>
                <ion-col size = 45px>
                    <ion-button class="notif">
                        <ion-icon slot = "icon-only" name="notifications"></ion-icon>
                    </ion-button>
                </ion-col>  
                <ion-col size = 25px> 
                    <ion-button class="threedots" fill = "clear"  color = "medium">
                        <ion-icon name="ellipsis-vertical"></ion-icon>
                    </ion-button> 
                </ion-col>  
            </ion-row>
        <ion-card-content>
            <p class = "content">${name}, обнаружен штраф</p>
        </ion-card-content>
        <ion-button class = "check" expand = "block">Проверить</ion-button>
    </ion-card>
    `;
    notifCard.innerHTML += code;
}

let item1 = ["16 дек. 2021г., 12:01", "Алтай Гарифуллович"];
let item2 = ["2 дек. 2021г., 16:35", "Алтай Гарифуллович"];
let item3 = ["1 дек. 2021г., 24:46", "Марат Даукенович"];
let item4 = ["25 нояб. 2021г., 9:45", "Өміржан Мұратжанұлы"];

createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);