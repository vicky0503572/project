class SignUp {
    constructor(login) {
      this.login = login;
    }
  
    isValidUsername(username) {
      // At least 8 characters, letters or numbers
      return /^[a-zA-Z0-9]{8,}$/.test(username);
    }
  
    isValidEmail(email) {
      // Simple email regex
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    isValidPassword(password) {
      // At least 8 characters
      return password.length >= 8;
    }
  
    register(username, email, password) {
      if (!this.isValidUsername(username)) {
        console.log("Invalid username. Must be at least 8 characters (letters/numbers).");
        return false;
      }
  
      if (!this.isValidEmail(email)) {
        console.log("Invalid email format.");
        return false;
      }
  
      if (!this.isValidPassword(password)) {
        console.log("Password must be at least 8 characters long.");
        return false;
      }
  
      const exists = this.login.users.some(
        user => user.username === username || user.email === email
      );
  
      if (exists) {
        console.log("Username or email is already registered.");
        return false;
      }
  
      this.login.users.push({ username, email, password });
      console.log(`User '${username}' registered successfully.`);
      return true;
    }
  }
  
  export default SignUp;
  