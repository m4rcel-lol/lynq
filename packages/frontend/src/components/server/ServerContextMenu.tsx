import { Settings, UserPlus } from "lucide-react";
import { ContextMenu } from "../ui/ContextMenu";

export function ServerContextMenu() {
  return (
    <ContextMenu>
      <button role="menuitem">
        <Settings size={14} aria-hidden /> Settings
      </button>
      <button role="menuitem">
        <UserPlus size={14} aria-hidden /> Invite
      </button>
    </ContextMenu>
  );
}
