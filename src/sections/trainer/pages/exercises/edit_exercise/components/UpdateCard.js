import React, {useState} from "react";
import {updateExercise} from "../../../../../../requests/trainers";
import Swal from "sweetalert2";
import {navigate} from "@reach/router";
import Spinner from "../../../../../../components/Spinner";

function UpdateCard(props) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(props.exercise.name);
    const [equipment, setEquipment] = useState(props.exercise.equipment);
    const [category, setCategory] = useState(props.exercise.category);
    const [image, setImage] = useState(props.exercise.blob.imageUrl);
    const [video, setVideo] = useState(props.exercise.blob.videoUrl);

    function submitFormDetails(event) {
        setLoading(true);
        event.preventDefault();
        const json_details = {
            pk: props.exercise.id,
            name,
            equipment,
            category,
            blob: {
                imageUrl: image,
                videoUrl: video,
                userData: {
                    sets: 0,
                    reps: 0,
                    rir: 0
                }
            }
        }
        updateExercise(json_details).then(data => {
            if (data.success) {
                Swal.fire(
                    'Success!',
                    data.message,
                    'success'
                ).then(() => {
                    navigate('/trainers/exercises/')
                });
            } else {
                Swal.fire('Error', data.message, 'error');
            }
        }).then(() => {
            setLoading(false);
        })
    }

    return (
        <div>
            <div className="bg-white shadow-lg border mt-5 px-4 py-3">
                {
                    loading ?
                        <Spinner/>
                        :
                        <form
                            onSubmit={event => submitFormDetails(event)}
                            className="flex flex-col md:flex-row justify-between md:items-center">
                            <div>
                                <div className="mb-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                           placeholder="Name"
                                           className="border rounded w-full px-3 py-1 mt-1 focus:shadow-outline"
                                           id="name"
                                           value={name}
                                           onChange={(event => setName(event.target.value))}
                                           required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="imageUrl">Image URL</label>
                                    <input type="text"
                                           placeholder="Image URL/Link"
                                           className="border rounded w-full px-3 py-1 mt-1 focus:shadow-outline"
                                           id="imageUrl"
                                           value={image}
                                           onChange={(event => setImage(event.target.value))}
                                           required
                                    />
                                </div>
                                <div className="mb-2 md:mb-0">
                                    <label htmlFor="name">YouTube Video</label>
                                    <input type="text"
                                           placeholder="YouTube Video URL/Link"
                                           className="border rounded w-full px-3 py-1 mt-1 focus:shadow-outline"
                                           id="name"
                                           value={video}
                                           onChange={(event => setVideo(event.target.value))}
                                           required
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <label htmlFor="muscleGroup">Muscle Group</label>
                                    <select name="muscleGroups"
                                            id="muscleGroups"
                                            className="border rounded w-full px-3 py-1 mt-1 focus:shadow-outline"
                                            value={category}
                                            onChange={event => setCategory(event.target.value)}
                                            required
                                    >
                                        <option value="" disabled hidden/>
                                        <option value="Chest">Chest</option>
                                        <option value="Shoulders">Shoulders</option>
                                        <option value="Biceps">Biceps</option>
                                        <option value="Triceps">Triceps</option>
                                        <option value="Lats">Lats</option>
                                        <option value="Calves">Calves</option>
                                        <option value="Glutes">Glutes</option>
                                        <option value="Hamstring">Hamstring</option>
                                        <option value="Quadriceps">Quadriceps</option>
                                        <option value="Middle Back">Middle Back</option>
                                        <option value="Lower Back">Lower Back</option>
                                        <option value="Traps">Traps</option>
                                        <option value="Neck">Neck</option>
                                        <option value="Abdominals">Abdominal</option>
                                        <option value="Abductors">Abductors</option>
                                        <option value="Adductors">Adductors</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="equipmentGroup">Equipment</label>
                                    <select name="equipmentGroup"
                                            id="equipmentGroup"
                                            className="border rounded w-full px-3 py-1 mt-1 focus:shadow-outline"
                                            required
                                            value={equipment}
                                            onChange={event => setEquipment(event.target.value)}
                                    >
                                        <option value="" disabled hidden/>
                                        <option value="Barbell">Barbell</option>
                                        <option value="Dumbbell">Dumbbell</option>
                                        <option value="Machine">Machine</option>
                                        <option value="Bands">Bands</option>
                                        <option value="Bodyweight">Bodyweight</option>
                                        <option value="Cables">Cables</option>
                                        <option value="Kettlebell">Kettlebell</option>
                                        <option value="Exercise Ball">Exercise Ball</option>
                                        <option value="Exercise Ball">Medicine Ball</option>
                                        <option value="EZ Curl Bar">EZ Curl Bar</option>
                                        <option value="Foam Roll">Foam Roll</option>
                                        <option value="Other">Other</option>
                                        <option value="None">None</option>
                                    </select>
                                </div>
                                <div className="mb-2 md:mb-0">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 w-full rounded px-3 py-2 focus:outline-none focus:shadow-outline text-white hover:bg-blue-600"
                                    >Update Exercise</button>
                                </div>
                            </div>
                        </form>
                }
            </div>
        </div>
    )
}


export default UpdateCard;