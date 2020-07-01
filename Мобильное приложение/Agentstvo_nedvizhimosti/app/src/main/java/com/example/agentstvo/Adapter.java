package com.example.agentstvo;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.database.sqlite.SQLiteDatabase;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.ImageButton;
import android.widget.TextView;

import java.util.ArrayList;

public class Adapter extends BaseAdapter {
    Context ctx;
    LayoutInflater lInflater;
    ArrayList<Event> objects;

    AlertDialog.Builder builder;
    DialogInterface.OnClickListener dialogClickListener;
    private IOnMySuperClickListenner mOnMySuperClickListenner;
    //Констуктор
    Adapter(Context context, ArrayList<Event> Events) {
        ctx = context;
        objects = Events;
        lInflater = (LayoutInflater) ctx.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    // кол-во элементов
    @Override
    public int getCount() {
        return objects.size();
    }

    // элемент по позиции
    @Override
    public Object getItem(int position) {
        return objects.get(position);
    }

    // id по позиции
    @Override
    public long getItemId(int position) {
        return getEvent(position)._id;
    }

    // пункт списка
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        View view = convertView;
        if (view == null) {
            view = lInflater.inflate(R.layout.item, parent, false);
        }

        final Event p = getEvent(position);

        ((TextView) view.findViewById(R.id.tvData)).setText(p.Data);
        ((TextView) view.findViewById(R.id.tvCount)).setText(p.Count + " минут");
        ((TextView) view.findViewById(R.id.tvType)).setText(p.Type);
        ((TextView) view.findViewById(R.id.tvComment)).setText(p.Comment);
        ImageButton Btdelet = (ImageButton) view.findViewById(R.id.BtDelete);
        Btdelet.setTag(position);
        Btdelet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(final View v) {
                dialogClickListener = new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        switch (which){
                            case DialogInterface.BUTTON_POSITIVE:
                                    DatabaseHelper sqlHelper;
                                    SQLiteDatabase db;
                                    sqlHelper = new DatabaseHelper(ctx);
                                    db = sqlHelper.getWritableDatabase();
                                    db.delete(DatabaseHelper.TABLE, DatabaseHelper.COLUMN_ID + " = " + p._id,null);
                                    db.close();
                                    if (mOnMySuperClickListenner  != null)
                                        mOnMySuperClickListenner.onClick((Integer)v.getTag());
                                break;

                            case DialogInterface.BUTTON_NEGATIVE:

                                break;
                        }
                    }
                };
                builder = new AlertDialog.Builder(ctx);
                //Вызвать диалог для потверждения пользователя для удаления
                builder.setMessage("Действительно удалить событие?").setPositiveButton("Да", dialogClickListener)
                        .setNegativeButton("Нет", dialogClickListener).show();
            }
        });

        return view;
    }

    //Событие по позиции
    Event getEvent(int position) {
        return ((Event) getItem(position));
    }

    public void setOnMySuperClickListenner(IOnMySuperClickListenner value)
    {
        mOnMySuperClickListenner = value;
    }

    public interface IOnMySuperClickListenner
    {
        public void onClick(int index);
    }
}
