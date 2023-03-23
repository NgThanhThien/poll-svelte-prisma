export interface PollModel  {
  id : number
  name :  string
  description :string
  tag : string
  type     :       string
  is_deleted  :    boolean
  user_id :       string
  created_at:Date
  updated_at :Date 
  time_end :Date
}