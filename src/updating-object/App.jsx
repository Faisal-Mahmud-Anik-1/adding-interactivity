import { useState } from "react";
import { useImmer } from "use-immer";
import Challenge from "./Challenge";

/* function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointer = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
    // position.x = e.clientX;
    // position.y = e.clientY;
  };
  return (
    <>
      <div
        onPointerMove={handlePointer}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "gray",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
} */
// ----
// Copying objects with the spread syntax
/* function Form() {
  const [person, setPerson] = useState({
    firstName: "Monkey D.",
    lastName: "Luffy",
    email: "monkeydluffy@mail.com",
  });

  const handleFirstNameChange = (e) => {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  };
  const handleLastNameChange = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };

  return (
    <>
      <form>
        <label htmlFor="first-name">
          First Name:
          <input
            onChange={handleFirstNameChange}
            value={person.firstName}
            id="first-name"
            placeholder="Enter your first name"
          />
        </label>
        <label htmlFor="last-name">
          Last Name:
          <input
            onChange={handleLastNameChange}
            value={person.lastName}
            id="last-name"
            placeholder="Enter your last name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            onChange={handleEmailChange}
            value={person.email}
            id="email"
            placeholder="Enter your email"
          />
        </label>
      </form>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
} */
/* Note that the ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once. */
// --

// Updating nested object

/* function NestedForm() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image:
        "https://images.pexels.com/photos/16056934/pexels-photo-16056934.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title} </i>
        by {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
} */

// Write concise update logic with Immer
// Updating nested object

function NestedFormImmer() {
  const [person, updatePerson] = useImmer({
    name: "Oda",
    artwork: {
      title: "One Piece",
      city: "Tokyo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXOZt_XmyqSlOcQjBU0aWZYxKttxdZLk26g&usqp=CAU",
    },
  });

  const handleNameChange = (e) => {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  };
  const handleTitleChange = (e) => {
    updatePerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  };
  const handleCityChange = (e) => {
    updatePerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  };
  const handleImageChange = (e) => {
    updatePerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  };

  return (
    <>
      <label htmlFor="name">
        Name:
        <input onChange={handleNameChange} value={person.name} id="name" />
      </label>
      <label htmlFor="title">
        Title:{" "}
        <input
          onChange={handleTitleChange}
          value={person.artwork.title}
          id="title"
        />
      </label>
      <label htmlFor="city">
        City:{" "}
        <input
          onChange={handleCityChange}
          value={person.artwork.city}
          id="city"
        />
      </label>
      <label htmlFor="image">
        Image:{" "}
        <input
          onChange={handleImageChange}
          value={person.artwork.image}
          id="image"
        />
      </label>
      <p>
        <i>
          <b> {person.artwork.title} </b>
        </i>
        by {person.name} located in ({person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
export default function App() {
  return (
    <>
      {/* <MovingDot /> */}
      {/* <Form /> */}
      {/* <NestedForm /> */}
      {/* <NestedFormImmer /> */}
      <Challenge />
    </>
  );
}
