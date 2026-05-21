import TextInput from '@/Components/TextInput';
import Container from '@/Components/Container';

export default function EnrollmentCard({member}:{member:any}){

    return(

        <Container className={"bg-gray-600 mt-4"}>

            {/*<form class="flex justify-end" method="POST" action="{{route('admin.delete',$member->id)}}">*/}
            {/*    @csrf*/}
            {/*    {{--                    @method('DELETE')--}}*/}
            {/*    <input type="submit" value="❌️">*/}
            {/*</form>*/}

            <form method="post">
                <table>
                    <tr>
                        <td>
                            <img alt='justanimage' src=""
                                 className={"rounded-full w-32 h-32"} />
                                <TextInput className={"mt-2 h-8 w-32"} value={member.image} name={"image"}></TextInput>
                        </td>
                        <td className={"align-middle"}>
                            <table>
                                <tr>
                                    <td>
                                        <label htmlFor={"name"} className={"ml-4"}>Name:</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48 "} id={"name"} name={"name"}
                                                   value={member.name}></TextInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor={"email"} className={"ml-4"}>Mail:</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48"} id={"email"} name={"email"}
                                                   value={member.email}></TextInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="password" className={"ml-4"}>Password:</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48"} id={"password"} name={"password"}
                                                   value={member.password}></TextInput>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>

                            <table>
                                <tr>
                                    <td>
                                        <label htmlFor={"role"} className={"ml-4"}>Role:</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48 "} id={"role"} name={"role"}
                                                      value={member.role}></TextInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor={"number"} className={"ml-4"}>Number:</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48"} id={"number"} name={"number"}
                                                   value={member.number}></TextInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor={"dob"} className={"ml-4"}>DOB:</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48"} id={"dob"} name={"dob"}
                                                   value={member.dob}></TextInput>
                                    </td>
                                </tr>
                            </table>

                        </td>
                        <td>

                            <table>
                                <tr>
                                    <td>
                                        <label htmlFor={"id"} className={"ml-4"}>ID:</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48 "} id={"id"} name={"id"}
                                                   value={member.id} readOnly={true}></TextInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor={"techStack"} className={"ml-4"}>Stack:</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48"} id={"techStack"} name={"techStack"}
                                                   value={member.techStack}></TextInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="created_at" className={"ml-4"}>Submission</label>
                                    </td>
                                    <td>
                                        <TextInput className={"h-9 w-48"} id={"created_at"} name={"created_at"}
                                                   value={member.created_at} readOnly={true}></TextInput>
                                    </td>
                                </tr>
                            </table>


                        </td>

                        <td>

                            <input type="submit" className={"size-32 text-3xl ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"} value="Update" />

                        </td>

                    </tr>

                </table>
            </form>

        </Container>



    );



}
