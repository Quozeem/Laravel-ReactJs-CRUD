<?php

namespace App\Models;
use DB;
use Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    use HasFactory;
    protected $table="users";
    public $timestamps=false;
    protected $fillable=[
            'fname', 'email','passowrd','status',
 'lname',  'address',  'phone', 'rank',
    ];
    public static function store($request)
    {
      if($request->all()){
       
        $select=Table::where('email','=',$request->email)->get();
   
        if(empty($request->fname)){
          return response()->json(
            ['status'=>"fnameerror",
            'data' =>"Firstname is required"
          ]);
        }
       else if(empty($request->email)){
          return response()->json(
            ['status'=>"emailerror",
             'data' =>"Email is required"
          ]);
        }
      
      else if(count($select) >0)
       {
            return response()->json([
               'status'=>"erroMailexit",
               'data'=> 'Email Already Exits'
             ]);
           } 
          
        else if(empty($request->address)){
          return response()->json(
            ['status'=>"addresserror",
             'data' =>"Address is required"
          ]);
        }
        else{
       $insert_all= $request->all();
       $table=Table::create($insert_all);
       if( $table){
        return response()->json(
          ['status'=>200,
           'data' =>"Successfully inserted!"
        ]);
       }
      }
        }
    }
    public static function fetchall()
    {
        $tablefetch=DB::table('users')
        ->get();
        if(($tablefetch->count()) > 0)
  {     
  return response()->json([
         'status'=> 200,
            'data'=> $tablefetch
              ,'count' => count($tablefetch)
           ]);
     }
     else{
      return response()->json([
        'error'=> "No Data Available"
        ]);
      }
    }
    public function edituser($user_id)
    {
        $edittable=  DB::table('users')
        ->WHERE('user_id','=',$user_id)
        ->get();
        return response()->json([
          'data'=>$edittable]);
    }
 public function updatealluser($request)
    {
      if($request->user_id)
      {
 $select=Table::where('email','=',$request->email)->get();
    if(count($select) >0)
    {
         return response()->json([
            'status'=>"failed",
            'error'=> 'Email Already Exits'
          ]);
        }
      else
      {
        $update_res=([
          "address"=>$request->address,
          "fname"=>$request->fname,
          "email"=>$request->email,
          "password"=>$request->password,
    ]);
      {
        $update_user=DB::table('users')
        ->where("user_id",'=',$request->user_id)
        ->update( $update_res);
    return response()->json([
            'status'=>200,
            'data'=>"Successfully Updated"]);
    }
        
     }}
     
    }
}

