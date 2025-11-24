/*
*********************************
 Subject: CGD 200 (Fall 2025)
 Author: Edilvan E. Falcon
 Instructor: David Kazaryan
 Date Created: 2025.11.19
 Description: Assignment No. 4
 
 Create an page to engage users and then direct them to your product or service page.
*********************************
*/

const correctAnswers = {
        q1: "a",
        q2: "b",
        q3: "b",
        q4: "a",
        q5: "b",
      };

      const quizForm = document.getElementById("quizForm");
      const submitBtn = document.getElementById("submitBtn");
      const inlineResult = document.getElementById("inlineResult");

      const resultHero = document.getElementById("resultHero");
      const scoreValueEl = document.getElementById("scoreValue");
      const scoreMessageEl = document.getElementById("scoreMessage");

      quizForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const questions = Object.keys(correctAnswers);

        // Check all questions answered
        for (let q of questions) {
          const selected = quizForm.querySelector(`input[name="${q}"]:checked`);
          if (!selected) {
            alert("Please answer all questions before submitting.");
            return;
          }
        }

        // Reset states
        document.querySelectorAll(".question").forEach((qElem) => {
          qElem.classList.remove("correct", "incorrect");
        });

        // Calculate score
        let score = 0;

        questions.forEach((qName) => {
          const selectedOption = quizForm.querySelector(
            `input[name="${qName}"]:checked`
          );
          const questionDiv = quizForm.querySelector(
            `.question[data-question="${qName}"]`
          );

          if (selectedOption.value === correctAnswers[qName]) {
            score++;
            questionDiv.classList.add("correct");
          } else {
            questionDiv.classList.add("incorrect");
          }
        });

        const total = questions.length;
        const percentage = Math.round((score / total) * 100);

        // Inline text under button
        inlineResult.textContent = `You scored ${score}/${total} (${percentage}%). Scroll down to see your result card.`;

        // Update hero content
        scoreValueEl.textContent = `${score}/${total}`;

        let message = "";
        if (score === total) {
          message = "Perfect score! You really know Thumbler. 🚀";
        } else if (percentage >= 60) {
          message = "Nice work! You already know a lot about Thumbler. 🙌";
        } else {
          message =
            "Good start! Check the product page to discover what Thumbler can really do. 💡";
        }
        scoreMessageEl.innerHTML = message;

        // Show hero section with animation
        resultHero.classList.add("visible");

        // Scroll smoothly to hero
        resultHero.scrollIntoView({ behavior: "smooth", block: "start" });
      });