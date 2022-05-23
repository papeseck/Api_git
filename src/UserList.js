const UserList = ({ todos }) => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">USERNAME</th>
                    <th scope="col">EMAIL</th>
                </tr>
            </thead>
            {
                todos.map((todo) => (
                    <>
                        <tbody>
                            <tr>
                                <td> {todo.name}</td>
                                <td>{todo.username}</td>
                                <td>{todo.email}</td>
                            </tr>
                        </tbody>
                    </>
                )
                )
            }
        </table>


    );
};
export default UserList;