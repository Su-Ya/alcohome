window.addEventListener("scroll", createObserver, false);

function createObserver() {
	const options = {
		threshold: 1
	};
	let prevRatio = 0.0;
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			prevRatio = entry.intersectionRatio;
			
			//prevRatio = 1，表示 video 100% inviewport or visible
			if (prevRatio > 0.6) {
				entry.target.play().catch(console.log);
			}
		});

	}, options);
	const video = document.querySelector('#make-drinks-10s-video')
	observer.observe(video);   
}

// set selected value
document.querySelector(".dropdown-menu-department").addEventListener('click',(event)=>{
	const selected = event.target.textContent;
	const dropdownButton = document.querySelector("#dropdownMenuDepartmentButton");
	dropdownButton.textContent = selected

	//若代表單位選「公司」，顯示「公司名稱」、「公司地址」欄位
	const fieldCompanyName = document.querySelector(".companyName");
	const fieldCompanyAddress = document.querySelector(".companyAddress");
	if(selected === "公司") {
		fieldCompanyName.classList.remove('fieldHidden')
		fieldCompanyAddress.classList.remove('fieldHidden')
	}else {
		fieldCompanyName.classList.add('fieldHidden')
		fieldCompanyAddress.classList.add('fieldHidden')
	}
})
document.querySelector(".dropdown-menu-whereToKnow").addEventListener('click',(event)=>{
	const selected = event.target.textContent;
	const dropdownButton = document.querySelector("#dropdownMenuWhereToKnowButton");
	dropdownButton.textContent = selected
})

function initReservationForm() {
	return {
		name: null,
		department: "個人",
		phone: null,
		email: null,
		whereToKnow: "粉絲專頁",
		contents: null
	}
}

function verifyForm() {
	let postForm = initReservationForm();
	
	const form = document.reservation;
	postForm = {
		...postForm,
		name: form.name.value,
		department: form.department.textContent.trim(),
		phone: form.phone.value,
		email: form.email.value,
		whereToKnow: form.whereToKnow.textContent.trim(),
		contents: form.contents.value
	}

	if( postForm.department === "公司") {
		postForm = {
			...postForm,
			companyName: form.companyName.value,
			companyAddress: form.companyAddress.value
		}
	}

	const hasEmpty = Object.keys(postForm).some(key => postForm[key] == null || postForm[key] === "")
	if( hasEmpty ) {
		alert('必填欄位不能為空');
		return;
	}
	submmitReservationForm(postForm);
}
function submmitReservationForm(postForm) {
	//時間戳記
	const today = new Date();
	const yyyy = today.getFullYear();
	const mm = today.getMonth()+1;
	const dd = today.getDate();
	const h = today.getHours();
	const m = today.getMinutes();
	const s = today.getSeconds();
	const timeStamp = `${yyyy}/${add0ToUnitsDigit(mm)}/${add0ToUnitsDigit(dd)} ${add0ToUnitsDigit(h)}:${add0ToUnitsDigit(m)}:${add0ToUnitsDigit(s)}`;
	//時間數字為個位數，前面加 0
	function add0ToUnitsDigit(i) {
		if (+i < 10) {
			i = "0" + i;
		}
		return i;
	}

	const url = "https://script.google.com/macros/s/AKfycbwp5u1sUmGwN0wa_cmPB2gtcy69-5rN1Y9dMwo0_9XvMfRcY_0otRcr7Q6JYC8DiI5G/exec"
	$.get(url, {
		...postForm,
		'timeStamp': timeStamp
	});
	alert('送出成功');
	modalFormHiden();
}
var myModal = new bootstrap.Modal(document.getElementById('modalForm'))
function modalFormHiden() {
	myModal.hide();
}

function showReelVideoPlay() {
	const video = document.querySelector("#main-banner-video");
	video.play();
}