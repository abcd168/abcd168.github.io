document.addEventListener('DOMContentLoaded', function () {
    // 导航栏点击事件
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.dataset.target;
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            const targetSection = document.getElementById(target);
            targetSection.classList.add('active');
        });
    });

    // 咨询表单提交事件
    const consultationForm = document.getElementById('consultationForm');
    consultationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const question = document.getElementById('question').value;
        alert(`感谢您的咨询，${name}！我们会尽快回复您的问题到 ${email}。您的问题是：${question}`);
        this.reset();
    });
});    