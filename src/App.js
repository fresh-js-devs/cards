import React from "react";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard"

function App() {
  return (
    <div>
      <UserForm />
      <div>
        <UserCard name="Matus" bio="Lorem ipsum dolor" />
        <UserCard name="Pavel" bio="Lorem ipsum dolor" />
        <UserCard name="Marek" bio="Lorem ipsum dolor" />
      </div>
    </div>
  );
}

export default App;
