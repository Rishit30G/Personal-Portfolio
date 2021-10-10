function sendMail(params) {
	var tempParams = {
		from_name: document.getElementById("fromName").value,
		email_sender: document.getElementById("emailSender").value,
		subject_sender: document.getElementById("subjectSender").value,
		message_sender: document.getElementById("message").value,
	};
	emailjs.send("{{SERVICE ID}}", "{{TEMPLATE ID}}", tempParams).then(
		(res) => {
			this.openPopup("Submitted Successfully");
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Mail Sent Successfully!",
				showConfirmButton: false,
				timer: 1500,
			});
		},
		(err) => {
			this.openPopup(`Failed in Submitting!\n Please contact abc@email.com`);
		}
	);
}

main = document.getElementById("overlay");
popup = document.getElementById("popup");
msgHTML = document.getElementById("msg");

function openPopup(msg) {
	popup.style.visibility = "visible";
	msgHTML.innerHTML = msg;
}

function closePopup() {
	popup.style.visibility = "hidden";
}

$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}
	});
	$(".menu-btn").click(function () {
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});

	// typing animation script
	var typed = new Typed(".typing", {
		strings: ["Your Skill", "Your Hobby", "Your Passion", "Your Proficiency"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
		fadeOut: true,
	});
	var typed = new Typed(".typing-2", {
		strings: ["Your Skill", "Your Hobby", "Your Passion", "Your Proficiency"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
	});
});
