class Login {
    constructor() {
      // Simulated user storage (shared with signup)
      this.users = []; // [{ username, email, password }]
    }
  
    authenticate(email, password) {
      const user = this.users.find(user => user.email === email);
  
      if (!user) {
        console.log("No user found with that email.");
        return false;
      }
  
      if (user.password !== password) {
        console.log("Incorrect password.");
        return false;
      }
  
      console.log(`User '${user.username}' logged in successfully.`);
      return true;
    }
  
    getUserList() {
      return this.users;
    }
  }
  
  export default Login;
  