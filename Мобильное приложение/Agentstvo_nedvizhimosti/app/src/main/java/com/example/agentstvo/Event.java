package com.example.agentstvo;

public class Event {
    int _id;
    String Data;
    int Count;
    String Type;
    String Comment;

    Event(int __id, String _Data, int _Count, String _Type,String _Comment) {
        _id = __id;
        Data = _Data;
        Count = _Count;
        Type = _Type;
        Comment = _Comment;
    }
}
