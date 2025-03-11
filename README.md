# User Directory App

## What You're Aiming For  

In this project, we are consuming an API that provides a list of users and displaying them in a React application.  

---

## 📜 Instructions Followed  

1. **Project Setup**  
   - Created a new React project using `create-react-app`.  
   - Created a `UserList.js` file inside the `src` folder.  

2. **Installed Dependencies**  
   - Installed **Axios** for API requests using:  
     ```bash
     npm install axios
     ```
   
3. **Fetched User Data from API**  
   - Used **jsonplaceholder** API to fetch user data:  
     ```
     https://jsonplaceholder.typicode.com/users
     ```
   - Used the **useEffect** hook to trigger the API call when the component mounts.  
   - Stored the fetched data in state using the **useState** hook.  

4. **Displayed the User List**  
   - Mapped through `listOfUser` state to display each user on the screen.  
   - Rendered user details in a structured format.  

5. **Styled the Application**  
   - Added basic CSS styling to improve the UI.  

---

## 🛠 Technologies Used  

- React.js  
- Axios  
- useEffect & useState hooks  
- JSONPlaceholder API  

---

## 📸 Screenshot  
![image](https://github.com/user-attachments/assets/d2ca6acb-e9ea-421d-985c-207dad72e96d)


---

## 🚀 How to Run the Project  

1. Clone the repository:  
   ```bash
   git clone https://github.com/idrissbado/apiname.git
