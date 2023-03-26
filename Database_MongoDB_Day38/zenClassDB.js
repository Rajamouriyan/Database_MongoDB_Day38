// 1)Find all the topics and tasks which are thought in the month of October
db.zenclass.find({"month" : "October"}, {_id: 0, tasks: 1, topics: 1})

// 2)Find all the company drives which appeared between 15 oct-2022 and 31-oct-2022
db.zenclass.find({company_drives: {$gt: "15 oct 2022", $lt: "31 oct 2022"}});

// 3)Find all the company drives and students who are appeared for the placement.
db.zenclass.find({Appeared: {$in: ["Yes"]}},{_id: 1,user: 1,company_drives: 1});

// 4)Find the number of problems solved by the user in codekata
db.zenclass.find({}, {_id:0, user: 1, codekata: 1});

// 5)Find all the mentors with who has the mentee's count more than 15
db.zenclass.find({mentors: {$gt: 15}});

// 6)Find the number of users who are absent and task is not submitted  between 15 oct-2022 and 31-oct-2022
db.zenclass.find({attendance: {$eq: "Absent"},task_submitted: {$eq: "No"},company_drives: {$gt: "15 oct 2022",$lt: "31 oct 2022"}});