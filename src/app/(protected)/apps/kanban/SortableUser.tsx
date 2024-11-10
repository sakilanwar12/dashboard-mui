import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface User {
  id: number;
  name: string;
}

const SortableUser = ({ user }: { user: User }) => {
  const { name } = user;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: user.id.toString(),
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} >
      Column {name}
    </div>
  );
};

export default SortableUser;
