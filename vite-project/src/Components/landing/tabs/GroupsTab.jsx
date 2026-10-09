
import { Paperclip, FileText, Users } from "lucide-react"; 

const GroupsTab = ({
  groups,
  activeGroup,
  setActiveGroup,
  groupMessages,
  groupMessage,
  setGroupMessage,
  researchers,
  onCreateGroup,
  onSendMessage,
  onFileUpload,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Groups List */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Research Groups</h3>
          <button
            onClick={onCreateGroup}
            className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
          >
            Create Group
          </button>
        </div>

        <div className="space-y-3">
          {groups.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No groups yet. Create your first research group!
            </p>
          ) : (
            groups.map((group) => (
              <div
                key={group.id}
                onClick={() => setActiveGroup(group)}
                className={`p-3 rounded-lg cursor-pointer ${
                  activeGroup?.id === group.id
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <h4 className="font-medium">{group.name}</h4>
                <p className="text-sm text-gray-500 truncate">{group.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">{group.members.length} members</span>
                  <span className="text-xs text-gray-500">
                    {new Date(group.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Group Chat */}
      {activeGroup ? (
        <div className="flex-1 bg-white rounded-xl shadow-sm p-4 flex flex-col">
          <div className="border-b pb-3 mb-3">
            <h3 className="text-lg font-semibold">{activeGroup.name}</h3>
            <p className="text-sm text-gray-500">{activeGroup.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {activeGroup.members.map((memberId) => {
                const member = researchers.find((r) => r.id === memberId);
                return member ? (
                  <span
                    key={memberId}
                    className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                  >
                    {member.name}
                  </span>
                ) : null;
              })}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 px-2">
            {groupMessages.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400 text-center py-8">
                  No messages yet. Start the conversation!
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {groupMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg relative ${
                        message.sender === "You"
                          ? "bg-blue-100 rounded-tr-none"
                          : "bg-gray-100 rounded-tl-none"
                      }`}
                    >
                      {message.sender !== "You" && (
                        <p className="font-medium text-sm text-blue-600">{message.sender}</p>
                      )}
                      <p className="text-gray-800 whitespace-pre-wrap break-words">
                        {message.content}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="border-t pt-3">
            <textarea
              rows="2"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2"
              placeholder="Type your message..."
              value={groupMessage}
              onChange={(e) => setGroupMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onSendMessage();
                }
              }}
            ></textarea>
            <div className="flex justify-between items-center">
              <div>
                <input
                  type="file"
                  id="group-file-upload"
                  className="hidden"
                  onChange={onFileUpload}
                  multiple
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="group-file-upload"
                  className="text-gray-500 hover:text-gray-700 cursor-pointer p-2"
                  title="Upload files"
                >
                  <Paperclip className="w-6 h-6" />
                </label>
              </div>
              <button
                onClick={onSendMessage}
                disabled={!groupMessage.trim()}
                className={`px-4 py-2 rounded-md ${
                  !groupMessage.trim()
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white transition-colors`}
              >
                Send
              </button>
            </div>
          </div>

          {/* Files Section */}
          {activeGroup.files.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <h4 className="font-medium mb-3">Shared Files</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeGroup.files.map((file) => (
                  <div key={file.id} className="p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {file.size} • {file.uploadedBy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 bg-white rounded-xl shadow-sm p-8 flex items-center justify-center">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No group selected</h3>
            <p className="mt-1 text-gray-500">Select a group from the list or create a new one</p>
            <button
              onClick={onCreateGroup}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Create Group
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupsTab;