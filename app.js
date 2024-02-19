let ticketCount = 0;
function moveToBuyTicket() {
    const ticketSection = document.getElementById("ticket_section");
    ticketSection.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
    });
}

let selectedTickets = [];
function handleTicketClick(ticketElement) {
    if (selectedTickets.includes(ticketElement)) {
        alert("You have already selected this ticket.");
        return;
    }

    const maxTicket = 4;
    const ticketPurchaseCountElement = document.querySelector("#ticket_purchase_count span");

    if (ticketCount >= maxTicket) {
        alert("You can't buy more than 4 tickets");
        return;
    }

    ticketElement.classList.add("bg-[#1DD100]");
    ticketCount++;
    ticketPurchaseCountElement.innerText = ticketCount;

    let availableTickets = parseInt(document.getElementById("total_ticket").innerText);
    availableTickets--;

    if (availableTickets === 0) {
        document.getElementById("buy_ticket").disabled = true;
        alert("Tickets are not available at the moment.");
    }

    document.getElementById('total_ticket').innerText = availableTickets;

    appendTicketDetails(ticketElement.innerHTML, "economy", "550");

    totalPrice();

    selectedTickets.push(ticketElement);

    if (ticketCount >= maxTicket) {
        disableTicketElements();
    }
}


function totalPrice(){
    const totalPriceElement = document.querySelector("#total_price span");
    const totalCalculateText = document.querySelector("#total_calculate #ticket_price span").innerText;
    const totalCalculateTextInt = parseInt(totalCalculateText);
    totalPriceElement.innerText = parseInt(totalPriceElement.innerText) + totalCalculateTextInt;
}
function appendTicketDetails(sitNumber, ticketType, ticketPrice) {
    const sitNo = document.getElementById("sit_No");
    const economy = document.getElementById("economy");
    const ticketPriceElem = document.getElementById("ticket_price");

    sitNo.appendChild(createElementWithText("span", sitNumber));
    sitNo.appendChild(document.createElement("br"));

    economy.appendChild(createElementWithText("span", ticketType));
    economy.appendChild(document.createElement("br"));

    ticketPriceElem.appendChild(createElementWithText("span", ticketPrice));
    ticketPriceElem.appendChild(document.createElement("br"));
}

function createElementWithText(tagName, textContent) {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    return element;
}


function disableTicketElements() {
    const ticketElements = document.querySelectorAll(".sit_num");
    for (let i = 0; i < ticketElements.length; i++) {
        ticketElements[i].disabled = true;
    }
}



const ticketElements = document.querySelectorAll(".sit_num");
for (let i = 0; i < ticketElements.length; i++) {
    ticketElements[i].addEventListener("click", () =>{
        handleTicketClick(ticketElements[i]);
    });
}

function useCouponCode(){
    const couponCode = document.getElementById("coupon_code");
    const couponCodeValue = couponCode.value;
    const couponCodeValueUpper = couponCodeValue.toUpperCase();
    const applyBtn = document.getElementById("apply_btn");
    if(couponCodeValueUpper === "NEW15"){
        const total = document.querySelector("#total_price span").innerText;
        const discount = total * 0.15;
        const grandTotal = document.querySelector("#grand_total span");
        grandTotal.innerText = total - discount;
        applyBtn.classList.add("hidden");
    }
    else if(couponCodeValueUpper === "COUPLE 20"){
        const total = document.querySelector("#total_price span").innerText;
        const discount = total * 0.20;
        const grandTotal = document.querySelector("#grand_total span");
        grandTotal.innerText = total - discount;
        applyBtn.classList.add("hidden");
    }
}

const nextBtn  = document.getElementById("next_btn");
nextBtn.addEventListener('click', () =>{
    const mainSection = document.getElementById("main_section");
    const headerSection = document.getElementById("header_section");
    const footerSection = document.getElementById("footer_section");
    const popUpId = document.getElementById("popUp_id");
    
    headerSection.classList.add("hidden");
    mainSection.classList.add("hidden");
    footerSection.classList.add("hidden");
    popUpId.classList.remove("hidden");
    popUpId.classList.add("flex");
})
const continueBtn  = document.getElementById("Continue_btn");
continueBtn.addEventListener('click', () =>{
    const mainSection = document.getElementById("main_section");
    const headerSection = document.getElementById("header_section");
    const footerSection = document.getElementById("footer_section");
    const popUpId = document.getElementById("popUp_id");
    
    popUpId.classList.add("hidden");
    headerSection.classList.remove("hidden");
    mainSection.classList.remove("hidden");
    footerSection.classList.remove("hidden");
})

