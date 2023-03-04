const VaccinationSchedule = () => {
    const save_options = [
        { text: "calendar", id: "calendar" },
        { text: "get pdf", id: "pdf" },
        { text: "receive sms(2 days prior)", id: "sms" },
    ];
    var animals = ["kuku(0-6wks)", "kuku(6-12wks)", "kuku(adult)", "cow()"];
    var animals_cap = [];
    for (let i = 0; i < animals.length; i++) {
        let str = animals[i];
        let str2 = str.charAt(0).toUpperCase() + str.slice(1);
        animals_cap.push({ label: str2, value: str });
    }

    const animal_selection = animals_cap.map((e, idx) => {
        return <option value={e.value}>{e.label}</option>;
    });

    const vaccine_save_inputs = save_options.map((e) => (
        <>
            <input
                type={"checkbox"}
                name={e.id}
                key={e.id}
                value={e.text}
                onChange={handleAnimalChange}
            />
            <label for={e.id}>{e.text}</label>
        </>
    ));
    //functions
    function handleAnimalChange(e) {
        console.log(e);
    }
    function handleSaveOptions(){
        return
    }

    return (
        <div>
            <h1>Vaccination</h1>
            <label for="animals">Choose animal:</label>
            <select
                name="animal_type"
                id="animal_type"
                onChange={handleAnimalChange}
            >
                {animal_selection}
            </select>

            <section>
                <h2>Select reminder options</h2>
                <div>{vaccine_save_inputs}</div>
                <button onClick={handleSaveOptions}>Save reminder selection</button>
            </section>
        </div>
    );
};

export default VaccinationSchedule;
