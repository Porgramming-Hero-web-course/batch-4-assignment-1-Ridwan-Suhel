{
    interface Profile { 
        name: string, 
        age: number, 
        email: string
    }

    // declaring partial type
    type PartialProfile = Partial<Profile>;
    // declaring my type for updateProfile function
    type TypeUpdateProfile = (user: Profile, prop: PartialProfile) => Profile;

    const updateProfile: TypeUpdateProfile = (user, prop) => {
        // using spread operator for mergin props
        return {...user, ...prop}
    }

    const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));

}