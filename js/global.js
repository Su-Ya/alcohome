/**********************************************************
	loading and set fb link to open iOSApp / AndroidApp / webpage
**********************************************************/
window.addEventListener('load', (event) => {
	setTimeout(() => {
		var loading = document.querySelector('.loading-container');
		if(loading) {
			loading.classList.add('hideLoading');
			loading.style.zIndex = -1;
			var main = document.querySelector('main');
			main.classList.remove('hide');
		}
		
		// 依 user 裝置不同，對應不同開啟 FB 連結的 url
		setFBLink();

	}, 1800);
	// }, 100);
});

function getOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (/android/i.test(userAgent)) {
		return 'android';
	}
	else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return 'iOS';
	}
	else {
		return 'webpage';
	}
}
function setFBLink() {
	const fbId = '103737408390721';
	const fbLink = {
		iOSApp: `fb://page/?id=${fbId}`,
		androidApp: `fb://page/${fbId}`,
		webpage: `https://www.facebook.com/alcohometw/`
	}
	switch (getOperatingSystem()) {
		case 'android':
			document.querySelector('.icon-fb').href = fbLink.androidApp;
			break;
		case 'iOS':
			document.querySelector('.icon-fb').href = fbLink.iOSApp;
			break;
		case 'webpage':
			document.querySelector('.icon-fb').href = fbLink.webpage;
		default:
			break;
	}

}


/**********************************************************
	Form submit
**********************************************************/
function verifyForm() {
	const form = document.reservation;
	const postForm = {
		name: form.name.value,
		phone: form.phone.value,
		email: form.email.value,
		contents: form.contents.value
	}
	const hasEmpty = Object.keys(postForm).some(key => postForm[key] == null || postForm[key] === "")
	if( hasEmpty ) {
		alert('必填欄位不能為空');
		return;
	}
	submmitReservationForm({
		...postForm,
		// 下面是非必填欄位，不用檢查空值
		companyName: form.companyName.value,
		taxIdNumber: form.taxIdNumber.value,
	});
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

	const url = "https://script.google.com/macros/s/AKfycbzNTRqUFN00-Y_zzX1bDaBs6_GDjPj6T80GFVKwvjn6-BKMXmPg1yshoihAfw0ucnMW/exec"
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