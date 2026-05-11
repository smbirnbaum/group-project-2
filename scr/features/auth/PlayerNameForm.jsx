// Input, button, username, navigation to quiz
// Enter name --> [input text] --> [button] --> navigate to quiz


<div>
    <h2>Enter Your Name</h2>

    <form> onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />

        <button type="submit">Start Quiz </button>

    </form>
</div>

export default PlayerNameForm;