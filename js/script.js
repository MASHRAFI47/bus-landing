let seatAvailable = document.getElementById('seat-available');
let totalSeat = parseInt(seatAvailable.innerText);

const btns = document.querySelectorAll('.btn-bus-seat');
let btnLength = btns.length;

let arr = [];
seatAvailable.innerText = btnLength;

let count = 0;

let price = 550;

let sum = 0;

let array = [];

let newArr = []



for (let index = 0; index < btns.length; index++) {

    const element = btns[index];
    array.push(element)

    function clickHandler(event) {
        element.classList.add('bg-[#1DD100]');
        element.classList.add('text-white');

        if (!array.includes(element.innerText)) {
            array.push(element.innerText)
            btnLength = btnLength - 1;
            seatAvailable.innerText = btnLength;
            if (newArr.length <= 3) {
                const btnText = element.innerText;
                const seatName = document.getElementById('seat-name');

                const div = document.createElement('div');
                div.classList.add('flex');
                div.classList.add('justify-between')
                div.classList.add('py-2')

                const p = document.createElement('p');
                p.innerText = btnText;
                newArr.push(p.innerText)

                div.append(p);
                seatName.appendChild(div);

                const anotherP = document.createElement('p');
                anotherP.innerText = "economic";
                div.append(anotherP);

                const priceTag = document.createElement('p');
                priceTag.innerText = 550;
                const newPriceTag = priceTag.innerText;
                const newPrice = parseInt(newPriceTag)
                div.append(priceTag);

                sum = sum + newPrice;


            }
            else {
                const seatCount = document.getElementById('seat-count');
                seatCount.innerText = newArr.length;
                alert("You can't buy more than 4 seats");
                element.setAttribute('disabled', true);
    
                let seatAvailable = document.getElementById('seat-available');
                seatAvailable.innerText = btns.length - newArr.length;
            }
            
        }


        if (newArr.length <= 4) {
            const seatCount = document.getElementById('seat-count');
            seatCount.innerText = newArr.length;
        }
        

        arr.push(event.target);

        //pull total price
        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = sum;

        //pull grand total
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = sum;


        //condition to next button
        const numberField = document.getElementById('number-field');
        if (array.length >= 1) {
            const nextBtn = document.getElementById('next-btn');
            nextBtn.removeAttribute('disabled');
        }
    }

    element.addEventListener('click', clickHandler);
}

const couponCode = document.getElementById('coupon-code');
couponCode.addEventListener('keyup', function () {
    if (couponCode.value === "NEW15" || couponCode.value === "Couple 20") {
        couponApply.removeAttribute('disabled');
    } else {
        couponApply.setAttribute('disabled', true)
    }
})


const couponApply = document.getElementById('coupon-apply');
couponApply.addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-code');

    if (couponCode.value === "NEW15") {
        const totalPrice = document.getElementById('total-price');
        const totalPriceAmount = parseInt(totalPrice.innerText);
        const discountedPrice = totalPriceAmount * (15 / 100);

        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = discountedPrice;

        const discountParent = document.getElementById('discount-id');
        discountParent.classList.remove('hidden');

        const coupon = document.getElementById('coupon');
        coupon.classList.add('hidden')

        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceAmount - discountPrice.innerText;
    }
    else if (couponCode.value === "Couple 20") {
        const totalPrice = document.getElementById('total-price');
        const totalPriceAmount = parseInt(totalPrice.innerText);
        const discountedPrice = totalPriceAmount * (20 / 100);

        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = discountedPrice;

        const discountParent = document.getElementById('discount-id');
        discountParent.classList.remove('hidden');

        const coupon = document.getElementById('coupon');
        coupon.classList.add('hidden')

        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceAmount - discountPrice.innerText;
    }
})

function numberElement(elementId) {
    const element = document.getElementById(elementId);
    const elementNumber = parseInt(element.innerText);
    return elementNumber;
}


const continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click', function() {
    window.location.reload();
})