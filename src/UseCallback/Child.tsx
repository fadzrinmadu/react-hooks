import { useEffect } from "react";

interface ChildProps {
  returnComment: (value: string) => string;
}


function Child(props: ChildProps) {
  const { returnComment } = props;

  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Pedro")}</div>;
}

export default Child;
