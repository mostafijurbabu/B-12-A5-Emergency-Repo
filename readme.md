ASSIGNMENT-005

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:

1.(a) getElementById:

Selects only one element by its unique id.

Always returns a single element (because id should be unique).

Example:
document.getElementById("myId");

(b) getElementsByClassName:

Selects multiple elements by their class name.

Returns an HTMLCollection (like an array, but not exactly).

Example:

document.getElementsByClassName("myClass");

(c) querySelector:

Selects the first matching element using a CSS selector (#id, .class, tag, etc.).

Example:

document.querySelector(".myClass");

(d) querySelectorAll:

Selects all matching elements using a CSS selector.

Returns a NodeList (similar to array, supports forEach).

Example:

document.querySelectorAll("p");

2. To create and insert a new element into the DOM using JavaScript, you usually follow these steps:

Create the element → use document.createElement().

Add content or attributes → using innerText, innerHTML, setAttribute(), or classList.

Insert it into the DOM → use appendChild(), append().

Example:

<div id="container"></div>

<script>

  const newElement = document.createElement("p");

  newElement.innerText = "I am a new paragraph.";

  document.getElementById("container").appendChild(newElement);

</script>

This will add a new <p> inside the #container.

3. Event Bubbling is a mechanism in the DOM where an event starts from the target element (the element that was actually clicked) and then bubbles up (propagates) through its parent elements, all the way up to the document object.

   If you click on a <button> inside a <div>, the event is first handled by the <button>, then moves to the <div>, then to <body>, and finally to <html> and document.

So, the event goes from the innermost element → outer elements.

(a) Default behavior in JavaScript events.

(b) Can be controlled using event.stopPropagation().

(c) Useful when we want to handle events at a parent level (Event Delegation).

4. Event Delegation in JavaScript is a technique where instead of adding event listeners to multiple child elements individually, you add a single event listener to a common parent element. The event then bubbles up from the child to the parent, and you can detect which child triggered the event.

   Why is it useful?

Performance optimization – Instead of attaching many listeners, you only use one.

Dynamic elements handling – Works even if new child elements are added later.

Cleaner code – Easier to manage compared to multiple listeners.

document.getElementById("parent").addEventListener("click", function(event) {
if (event.target.tagName === "BUTTON") {
alert("Button clicked: " + event.target.innerText);
}
});

Here, even if you add more buttons inside #parent, the single listener still works.

5. preventDefault():

The preventDefault() method prevents the default action of an event from happening.
Example: Clicking a link normally redirects you to another page. Using preventDefault(), you can stop that redirection.

stopPropagation():

The stopPropagation() method stops the event from bubbling up (or propagating) to parent elements.
Example: If you click a button inside a <div>, the click event normally "bubbles up" to the <div>. Using stopPropagation(), you can stop the event from reaching the parent.

Key Difference

preventDefault() → Stops default browser action.

stopPropagation() → Stops event bubbling / propagation.
