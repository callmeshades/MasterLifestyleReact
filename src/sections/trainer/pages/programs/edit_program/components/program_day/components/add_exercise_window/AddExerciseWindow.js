import React, {useEffect, useState} from "react";
import {getAlLExercises} from "../../../../../../../../../requests/trainers";
import Swal from "sweetalert2";
import Spinner from "../../../../../../../../../components/Spinner";
import avatar from "../../../../../../../../../assets/img/exercise-avatar.jpg";
import {useStoreActions} from "easy-peasy";



function AddExerciseWindow(props) {
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [allExercises, setAllExercises] = useState('');
    const [filteredList, setFilteredList] = useState('');
    const addExerciseToDayState = useStoreActions(actions => actions.program.addExerciseToDay);

    useEffect(() => {
        setLoading(true);
        getAlLExercises().then(data => {
            if (data.success) {
                setAllExercises(data.exercises);
                setFilteredList(data.exercises);
            } else {
                Swal.fire('Error', data.message, 'error');
            }
        }).then(() => {
            setLoading(false);
        })
    }, []);

    function filterExerciseList(search_value) {
        setSearchValue(search_value);
        const temp_array = allExercises;
        let newFilteredList = temp_array.filter(exercise => exercise.name.toLowerCase().includes(search_value.toLowerCase()));
        setFilteredList(newFilteredList);
    }

    function addExerciseToDay(exerciseObject) {
        addExerciseToDayState({
            day_id: props.dayId,
            exercise_object: exerciseObject
        })
    }

    return (
        <div className="absolute top-0 right-0 bottom-0">
            <div className="flex w-screen h-screen justify-end z-50">
                <div
                    onClick={props.setAddExerciseWindow}
                    className="w-full"
                />
                <div
                    style={{ width: "18rem" }}
                    className="bg-gray-100 shadow-lg border-l">
                    {
                        loading ?
                            <Spinner/>
                            :
                            <div>
                                <div>
                                    <input type="text"
                                           value={searchValue}
                                           onChange={event => filterExerciseList(event.target.value)}
                                           placeholder="Exercise name..."
                                           className="shadow border-b bg-white w-full py-2 px-2"/>
                                </div>
                                <div className="px-2 py-2 w-full h-full overflow-y-auto">
                                    { filteredList && filteredList.map((item) =>
                                        <div key={item.id}
                                             onClick={() => addExerciseToDay(item)}
                                             className="border bg-white shadow-sm cursor-pointer hover:bg-blue-400 hover:text-white flex px-2 py-2 mt-2">
                                            <div className="flex justify-start items-center">
                                                <img
                                                    src={item.blob.imageUrl ? item.blob.imageUrl : avatar}
                                                    className="h-10 w-10 mr-2"
                                                    alt={item.name}/>
                                                <p>
                                                    {item.name}
                                                </p>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    ) }
                                </div>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default AddExerciseWindow;