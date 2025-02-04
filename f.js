document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('role-quiz');
    const quizResultDiv = document.getElementById('quiz-result');
    const roleNameSpan = document.getElementById('role-name');
    const roleDescriptionP = document.getElementById('role-description');

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const q1Value = document.querySelector('input[name="q1"]:checked').value;
        const q2Value = document.querySelector('input[name="q2"]:checked').value;

        let role = '';
        let description = '';

        if (q1Value === 'catalyst' && q2Value === 'catalyst') {
            role = 'The Catalyst';
            description = 'You are a natural initiator, driven by results and progress. You thrive in leadership roles and are excellent at making things happen.';
        } else if (q1Value === 'healer' && q2Value === 'healer') {
            role = 'The Healer';
            description = 'You are deeply empathetic and focused on the well-being of others. You excel in creating supportive and inclusive environments.';
        } else if (q1Value === 'visionary' && q2Value === 'visionary') {
            role = 'The Visionary';
            description = 'You are imaginative and always looking towards the future, motivated by innovation and new ideas. You inspire others with your unique perspectives.';
        } else {
            role = 'The Collaborator';
            description = 'You are a blend of different roles, able to adapt to various situations and contribute in diverse ways. Collaboration and teamwork are your strengths.';
        }

        roleNameSpan.textContent = role;
        roleDescriptionP.textContent = description;
        quizResultDiv.style.display = 'block';
    });
});
