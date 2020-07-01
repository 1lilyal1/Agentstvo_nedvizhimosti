package com.example.agentstvo;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cursoradapter.widget.SimpleCursorAdapter;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    ListView userList;
    DatabaseHelper databaseHelper;
    SQLiteDatabase db;
    Cursor cursor;

    ArrayList<Event> events = new ArrayList<Event>();
    Adapter adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        userList = (ListView)findViewById(R.id.list);



        databaseHelper = new DatabaseHelper(getApplicationContext());
    }
    @Override
    public void onResume() {
        super.onResume();
        events.clear();
        // открываем подключение
        db = databaseHelper.getReadableDatabase();

        //получаем данные из бд в виде курсора
        cursor =  db.rawQuery("select * from "+ DatabaseHelper.TABLE, null);

        for(cursor.moveToFirst(); !cursor.isAfterLast(); cursor.moveToNext()) {
            int _id = cursor.getInt(cursor.getColumnIndex(DatabaseHelper.COLUMN_ID));
            String data = cursor.getString(cursor.getColumnIndex(DatabaseHelper.COLUMN_YEAR));
            int Count = cursor.getInt(cursor.getColumnIndex(DatabaseHelper.COLUMN_COUNT));
            String Type = cursor.getString(cursor.getColumnIndex(DatabaseHelper.COLUMN_TYPE));
            String Comment = cursor.getString(cursor.getColumnIndex(DatabaseHelper.COLUMN_COMMENT));
            events.add(new Event(_id, data, Count, Type, Comment));
        }

        adapter = new Adapter(this, events);
        adapter.setOnMySuperClickListenner(new Adapter.IOnMySuperClickListenner() {
            @Override
            public void onClick(int index) {
                onResume();
            }
        });

        // настраиваем список
        ListView lvMain = (ListView) findViewById(R.id.list);
        lvMain.setAdapter(adapter);
    }

    @Override
    public void onDestroy(){
        super.onDestroy();
        db.close();
        cursor.close();
    }

    //Новое Активити с добавлением нового события
    public void add(View view){
        Intent intent = new Intent(this, AddActivity.class);
        startActivity(intent);
    }

}
