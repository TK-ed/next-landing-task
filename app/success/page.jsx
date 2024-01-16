"use client";
export default function Success({searchParams}) {
  const { email } = searchParams
    // console.log(email);

  return (
    <div className="text-4xl text-center">
      Welcome {email}!! Login Successful
    </div>
  );
}
