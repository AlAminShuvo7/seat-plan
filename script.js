document.getElementById("final").addEventListener("click", show);


function show() {
    const examCenters = [
        [1, "Shamsul Hoque Khan School and College (School Campus)", "Paradogar, Matuail, Demra, Dhaka-1362.", 500001, 509935, 7900],
        [2, "Shamsul Hoque Khan School and College (College Campus)", "Paradogar, Matuail, Demra, Dhaka-1362.", 509936, 512553, 2100],
        [3, "A. K. School & College (Main Campus)", "Dania, Jatrabari, Dhaka-1236", 512555, 516593, 3200],
        [4, "A. K. School & College (New Campus)", "Dania, Jatrabari, Dhaka-1236", 516594, 518873, 1800],
        [5, "Barnamala Adarsha High School and College", "Dania, Jatrabari, Dhaka-1236", 518874, 523277, 3500],
        [6, "Dania College", "Dania, Jatrabari, Dhaka-1236", 523278, 530784, 6000],
        [7, "Dr. Mahbubur Rahman Mollah College", "Matuail, Demra Road, Jatrabari, Dhaka-1362", 530785, 540920, 8000],
        [8, "Jatrabari Ideal School & College", "Jatrabari, Dhaka-1204", 540921, 544702, 3000],
        [9, "Ahmed Bawany Academy School & College", "3-5 KP Ghosh Street, Armanitola, Babubazar, Dhaka-1100", 544705, 549782, 4000],
        [10, "Fazlul Haque Mohila College", "12 Akshay Das Lane, Gandaria, Dhaka-1204", 549784, 553539, 3000],
        [11, "Kabi Nazrul Govt. College", "1 No. Municipality Street, Dhaka-1100", 553541, 557308, 3000],
        [12, "Dhaka Mohanagar Mohila College", "6 No. Suvash Bosh Avenue, Luxmibazar, Dhaka-1100", 557310, 561720, 3500],
        [13, "Ali Ahmed School & College", "South Goran, Khilgaon, Dhaka-1219", 561722, 564907, 2500],
        [14, "Khilgaon Girls' School and College", "Khilgaon, Dhaka-1219", 564908, 569323, 3500],
        [15, "Khilgaon Govt. High School", "Khilgaon, Dhaka-1219", 569324, 572484, 2500],
        [16, "Khilgaon Model College", "Khilgaon, Chowrasta, Dhaka 1219", 572485, 576218, 3000],
        [17, "Model High School Khilgaon", "Sahid Baki Road, 411/A Khilgaon, Dhaka-1219", 576219, 578723, 2000],
        [18, "Sabujbagh Government College", "70/3 South Basabo (Near Balur Mat), Sabujbagh, Dhaka-1214", 578724, 581904, 2500],
        [19, "Kadamtala Purba Basabo School & College", "Basabo, Dhaka-1214", 581905, 586215, 3400],
        [20, "Mirpur Bangla School and College (Boys Section)", "Section 11, Pallabi, Dhaka-1216", 586216, 590633, 3500],
        [21, "Mirpur Bangla School and College (Girls' Section)", "Section 06. Pallabi, Dhaka-1216", 590634, 592788, 1700],
        [22, "Mirpur College", "Mirpur-2, Dhaka-1216", 592789, 597775, 3957],
        [23, "Mirpur Girls Ideal College", "Mirpur-10, Pallabi, Dhaka-1216", 597776, 601533, 3000],
        [24, "Mirpur Girls Ideal Laboratory Institute", "Mirpur-10, Dhaka-1216", 601534, 605988, 3500],
        [25, "Gazi Shamsunnesa (Mogbazar) Girls High School", "52. Siddheswari, Ramna, Dhaka-1217", 605989, 609175, 2500],
        [26, "Siddheswari College", "25, Shahid Shangbadik Selina Parveen Sarak, Moghbazar, Dhaka-1217", 609176, 613595, 3500],
        [27, "Siddheswari Girls' College", "148, New Baily Rd, Dhaka-1000", 613596, 618341, 3800],
        [28, "Sher-E-Bangla Nagar Govt. Boys High School", "Sher-E-Bangla Nagar, Dhaka-1207", 618342, 621558, 2500],
        [29, "Govt. Science College", "446, Tejgaon Shilpa Alaka, Dhaka-1208", 621559, 624929, 2686]
    ];

    const x = document.getElementById("roll-number").value;

    const check = examCenters[0][3].toString().length;
    const lowRange = examCenters[0][3];
    const highRange = examCenters[examCenters.length - 1][4];

    if (x.toString().length !== check || x < lowRange || x > highRange) {
        alert("Please enter a valid roll number.");
    }
    else {
        const resultDiv = document.getElementById("result");

        if (resultDiv) {
            resultDiv.replaceChildren();
        }

        
        // Center
        const center = document.createElement("h1");
        center.setAttribute("class", "center");
        center.innerText = examCenters.find(center => x >= center[3] && x <= center[4])[1] + " (Center No. " +
            examCenters.find(center => x >= center[3] && x <= center[4])[0] + ")";
        resultDiv.appendChild(center);

        // Address
        const address = document.createElement("h2");
        address.setAttribute("class", "address");
        address.innerText = examCenters.find(center => x >= center[3] && x <= center[4])[2];
        resultDiv.appendChild(address); 


        // Roll Check
        const rollCheck = document.createElement("p");
        rollCheck.setAttribute("class", "clarify");
        rollCheck.innerText = "Your Roll Number is Within: " + 
            examCenters.find(center => x >= center[3] && x <= center[4])[3] + " - " +
            examCenters.find(center => x >= center[3] && x <= center[4])[4];
        resultDiv.appendChild(rollCheck);

        // Number of Candidates
        const candidates = document.createElement("p");
        candidates.setAttribute("class", "num");
        candidates.innerText = "Total Candidates In Your Center: " + 
            examCenters.find(center => x >= center[3] && x <= center[4])[5];
        resultDiv.appendChild(candidates);


        document.getElementById("result-section").style.display = "flex";
        document.getElementById("result-section").style.flexDirection = "column";
        document.getElementById("result-section").style.alignItems = "center";

    }
    
}