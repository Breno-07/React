export default function Form2() {
    let person = {
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    }

    function handleFirstNameChange(e) {
        person.firstName = e.target.value;
    }

    function handleLastNameChange(e) {
        person.lastName = e.target.value;
    }

    function handleEmailChange(e) {
        person.email = e.target.value;
    }

    return (
        <>
            <label>
                First name:
                <input
                value={person.firstName}
                onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                value={person.lastName}
                onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                value={person.email}
                onChange={handleEmailChange}
                />
                <p>
                    {person.firstName}{' '}
                    {person.lastName}{' '}
                    ({person.email})
                </p>
            </label>
        </>
    );
}
