"use client";

import { useState } from "react";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import SortableUser from "./SortableUser";

const initialUsers = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];

const KanbanApp = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setUsers((prevUsers) => {
        const oldIndex = prevUsers.findIndex((user) => user.id === Number(active.id));
        const newIndex = prevUsers.findIndex((user) => user.id === Number(over?.id));
        return arrayMove(prevUsers, oldIndex, newIndex);
      });
    }
  };

  return (
    <div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={users} strategy={verticalListSortingStrategy}>
          {users.map((user) => (
            <SortableUser key={user.id} user={user} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default KanbanApp;
